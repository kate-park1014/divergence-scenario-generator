export const scenario_snowy_frostwail_64_03 = {
	"scenario_id": "snowy_frostwail_64_03",
	"order": 3,
	"act": "rising",
	"theme": "snowy",
	"actors": {
		"bran": {
			"id": "mon_985fcdcc-1bf2-4822-aa2f-292ae9353456",
			"name": {
				"korean": "브란",
				"english": "Bran",
				"japanese": "ブラン",
				"chinese": "布兰",
				"french": "Bran",
				"spanish": "Bran",
				"vietnamese": "Bran",
				"thai": "แบรน",
				"hindi": "ब्रैन"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/42cde50b-7453-47b1-04df-73500ad21d00/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/4ecba7ed-ec7e-4a8e-74dc-bf3e711b4d00/public"
		}
	},
	"boss": {
		"pool_id": "random_boss"
	},
	"rooms": [
		{
			"id": 1,
			"dialogue": [
				{
					"emotion": "base",
					"speaker": "narrator",
					"content": {
						"korean": "심장이 얼어붙는 듯한 한기. 동굴은 침묵으로 가득했다.",
						"english": "A chill that freezes the heart. The cave was filled with silence.",
						"japanese": "心臓が凍りつくような寒気。洞窟は沈黙に満ちていた。",
						"chinese": "令人心寒的寒意。洞穴里充满了寂静。",
						"french": "Un froid qui glace le cœur. La grotte était emplie de silence.",
						"spanish": "Un frío que congela el corazón. La cueva estaba llena de silencio.",
						"vietnamese": "Một cơn lạnh buốt thấu tim. Hang động tràn ngập sự im lặng.",
						"thai": "ความหนาวเหน็บที่เยือกเย็นจับใจ ถ้ำเต็มไปด้วยความเงียบงัน",
						"hindi": "दिल को जमा देने वाली ठंड। गुफा सन्नाटे से भरी थी।"
					},
					"type": "speech"
				},
				{
					"emotion": "base",
					"speaker": "character_any",
					"content": {
						"korean": "…여기는.",
						"english": "...Here.",
						"japanese": "...ここは。",
						"chinese": "...这里是。",
						"french": "...Ici.",
						"spanish": "...Aquí.",
						"vietnamese": "...Đây là đâu.",
						"thai": "...ที่นี่",
						"hindi": "...यहां।"
					},
					"type": "speech"
				},
				{
					"emotion": "sad",
					"speaker": "narrator",
					"content": {
						"korean": "희미한 북극광조차 이곳에서는 희망처럼 느껴지지 않았다.",
						"english": "Even the faint aurora borealis felt not like hope here.",
						"japanese": "かすかなオーロラさえも、ここでは希望のように感じられなかった。",
						"chinese": "即使是微弱的北极光，在这里也感受不到一丝希望。",
						"french": "Même la faible aurore boréale ne ressemblait pas à de l'espoir ici.",
						"spanish": "Incluso la tenue aurora boreal no se sentía como esperanza aquí.",
						"vietnamese": "Ngay cả cực quang mờ nhạt cũng không mang lại hy vọng ở đây.",
						"thai": "แม้แต่แสงเหนือที่เลือนรางก็ไม่ให้ความรู้สึกเหมือนความหวังที่นี่",
						"hindi": "यहां तक कि धुंधली उत्तरी रोशनी भी आशा जैसी नहीं लग रही थी।"
					},
					"type": "speech"
				}
			]
		},
		{
			"dialogue": [
				{
					"spot": [
						4,
						2
					],
					"type": "direction",
					"duration_ms": 500,
					"speaker": "bran",
					"action": "enter"
				},
				{
					"speaker": "bran",
					"content": {
						"korean": "…크롤러르 마라… 스칼… 흐베르…",
						"english": "...Krolur Mara... Skal... Hver...",
						"japanese": "...クロールル マラ… スカル… フヴェル…",
						"chinese": "...克罗卢尔 玛拉... 斯卡尔... 赫维尔...",
						"french": "...Krolur Mara... Skal... Hver...",
						"spanish": "...Krolur Mara... Skal... Hver...",
						"vietnamese": "...Krolur Mara... Skal... Hver...",
						"thai": "...ครอลูร์ มาเรอ... สกาล... เฮวอร์...",
						"hindi": "...क्रोलर मारा... स्कल... ह्वेर..."
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "누구지? 뭐라고 하는 거야?",
						"english": "Who is it? What are they saying?",
						"japanese": "誰だ？何を言っているんだ？",
						"chinese": "是谁？在说什么？",
						"french": "Qui est-ce ? Que dit-il ?",
						"spanish": "¿Quién es? ¿Qué está diciendo?",
						"vietnamese": "Ai vậy? Họ đang nói gì thế?",
						"thai": "ใครน่ะ? พูดอะไร?",
						"hindi": "कौन है? क्या कह रहा है?"
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"emotion": "sad",
					"speaker": "bran",
					"content": {
						"korean": "…길을 잃었는가… 집으로… 돌아가라…",
						"english": "...Are you lost... Go home...",
						"japanese": "...道に迷ったのか…家へ…帰れ…",
						"chinese": "...迷路了吗...回家去...",
						"french": "...Es-tu perdu... Rentrez chez vous...",
						"spanish": "...¿Estás perdido... Vuelve a casa...",
						"vietnamese": "...Ngươi bị lạc sao... Về nhà đi...",
						"thai": "...หลงทางหรือเปล่า...กลับบ้านไป...",
						"hindi": "...क्या तुम खो गए हो... घर जाओ..."
					}
				},
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "망령 같은 목소리. 그의 눈은 깊은 상실감을 담고 있었다.",
						"english": "A spectral voice. His eyes held a profound loss.",
						"japanese": "亡霊のような声。彼の瞳には深い喪失感が宿っていた。",
						"chinese": "幽灵般的声音。他的眼中充满了深深的失落。",
						"french": "Une voix spectrale. Ses yeux reflétaient une profonde perte.",
						"spanish": "Una voz espectral. Sus ojos reflejaban una profunda pérdida.",
						"vietnamese": "Một giọng nói ma quái. Đôi mắt hắn chứa đựng sự mất mát sâu sắc.",
						"thai": "เสียงผีสิง. ดวงตาของเขาเต็มไปด้วยความสูญเสียอย่างลึกซึ้ง",
						"hindi": "एक प्रेत जैसी आवाज़। उसकी आँखों में गहरा दुःख था।"
					},
					"emotion": "base"
				}
			],
			"id": 3
		},
		{
			"dialogue": [
				{
					"spot": [
						2,
						2
					],
					"type": "direction",
					"speaker": "bran",
					"action": "enter",
					"duration_ms": 500
				},
				{
					"emotion": "sad",
					"speaker": "bran",
					"content": {
						"korean": "…끔찍한 서약… 희생… 또 다시…",
						"english": "…A terrible vow… Sacrifice… Again…",
						"japanese": "…恐ろしい誓い… 犠牲… またもや…",
						"chinese": "…可怕的誓约… 牺牲… 又一次…",
						"french": "…Un serment terrible… Sacrifice… Encore…",
						"spanish": "…Un juramento terrible… Sacrificio… Otra vez…",
						"vietnamese": "…Lời thề kinh khủng… Hy sinh… Lại lần nữa…",
						"thai": "…คำสาบานอันน่ากลัว… การเสียสละ… อีกครั้ง…",
						"hindi": "…भयानक प्रतिज्ञा… बलिदान… फिर से…"
					},
					"type": "speech"
				},
				{
					"emotion": "base",
					"speaker": "character_any",
					"content": {
						"korean": "무슨 소리야? 뭘 말하는 거야?",
						"english": "What's that sound? What are you saying?",
						"japanese": "何の音だ？何を言っているんだ？",
						"chinese": "什么声音？你在说什么？",
						"french": "Quel est ce bruit ? Que dis-tu ?",
						"spanish": "¿Qué sonido es ese? ¿Qué dices?",
						"vietnamese": "Tiếng gì vậy? Ngươi đang nói gì thế?",
						"thai": "เสียงอะไร? คุณกำลังพูดอะไร?",
						"hindi": "यह कैसी आवाज़ है? तुम क्या कह रहे हो?"
					},
					"type": "speech"
				},
				{
					"speaker": "bran",
					"content": {
						"korean": "이 길은… 끝이 없다… 돌아가라…",
						"english": "This path… has no end… Turn back…",
						"japanese": "この道は… 終わりがない… 戻れ…",
						"chinese": "这条路… 没有尽头… 回去吧…",
						"french": "Ce chemin… n'a pas de fin… Retourne…",
						"spanish": "Este camino… no tiene fin… Regresa…",
						"vietnamese": "Con đường này… không có điểm kết… Quay lại đi…",
						"thai": "เส้นทางนี้… ไม่มีที่สิ้นสุด… กลับไปซะ…",
						"hindi": "यह रास्ता… अंतहीन है… लौट जाओ…"
					},
					"emotion": "sad",
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator",
					"content": {
						"korean": "고대 유물에서 섬뜩한 룬 문양이 빛났다.",
						"english": "Eerie runes glowed on the ancient artifact.",
						"japanese": "古代の遺物から不気味なルーン文字が輝いた。",
						"chinese": "古老文物上，诡异的符文闪耀着光芒。",
						"french": "Des runes sinistres brillaient sur l'artefact ancien.",
						"spanish": "Runas espeluznantes brillaron en el artefacto antiguo.",
						"vietnamese": "Những ký hiệu rune đáng sợ phát sáng trên cổ vật.",
						"thai": "อักษรรูนน่าขนลุกเรืองแสงอยู่บนวัตถุโบราณ",
						"hindi": "प्राचीन कलाकृति पर भयावह रुनिक अक्षर चमक उठे।"
					}
				},
				{
					"emotion": "base",
					"speaker": "character_any",
					"content": {
						"korean": "이 문양… 이건 대체…",
						"english": "These runes… What in the world…",
						"japanese": "この文様… 一体これは…",
						"chinese": "这些符文… 这到底是什么…",
						"french": "Ces runes… Mais qu'est-ce que c'est…",
						"spanish": "Estos símbolos… ¿Qué demonios es esto…",
						"vietnamese": "Những ký hiệu này… Rốt cuộc đây là gì…",
						"thai": "อักษรพวกนี้… นี่มันอะไรกันแน่…",
						"hindi": "ये चिह्न… यह क्या है…"
					},
					"type": "speech"
				}
			],
			"id": 5
		},
		{
			"dialogue": [
				{
					"spot": [
						3,
						2
					],
					"type": "direction",
					"duration_ms": 500,
					"speaker": "bran",
					"action": "enter"
				},
				{
					"type": "speech",
					"speaker": "bran",
					"content": {
						"korean": "…모든 노력은… 다시 제자리로…",
						"english": "…All efforts… back to square one…",
						"japanese": "…全ての努力は… また振り出しに…",
						"chinese": "…所有的努力… 又回到了原点…",
						"french": "…Tous les efforts… réduits à néant…",
						"spanish": "…Todo esfuerzo… de vuelta al inicio…",
						"vietnamese": "…Mọi nỗ lực… lại trở về số không…",
						"thai": "…ความพยายามทั้งหมด… กลับไปที่จุดเริ่มต้น…",
						"hindi": "…सारी कोशिशें… फिर से शून्य पर…"
					},
					"emotion": "sad"
				},
				{
					"type": "speech",
					"emotion": "angry",
					"speaker": "character_any",
					"content": {
						"korean": "아니야. 난 끝까지 갈 거야.",
						"english": "No. I will go to the very end.",
						"japanese": "いや。私は最後まで行く。",
						"chinese": "不。我一定会走到最后。",
						"french": "Non. J'irai jusqu'au bout.",
						"spanish": "No. Iré hasta el final.",
						"vietnamese": "Không. Ta sẽ đi đến cùng.",
						"thai": "ไม่ ฉันจะไปให้ถึงที่สุด",
						"hindi": "नहीं। मैं अंत तक जाऊँगा।"
					}
				},
				{
					"type": "speech",
					"speaker": "bran",
					"content": {
						"korean": "…비극은 반복된다… 너도… 예외는 아니야…",
						"english": "…Tragedy repeats… You… are no exception…",
						"japanese": "…悲劇は繰り返される… お前も… 例外ではない…",
						"chinese": "…悲剧重演… 你也… 不例外…",
						"french": "…La tragédie se répète… Toi aussi… tu n'es pas une exception…",
						"spanish": "…La tragedia se repite… Tú… no eres la excepción…",
						"vietnamese": "…Bi kịch lặp lại… Ngươi cũng… không ngoại lệ…",
						"thai": "…โศกนาฏกรรมซ้ำรอย… เจ้าเอง… ก็ไม่ใช่ข้อยกเว้น…",
						"hindi": "…त्रासदी दोहराई जाती है… तुम भी… अपवाद नहीं हो…"
					},
					"emotion": "sad"
				},
				{
					"emotion": "base",
					"speaker": "narrator",
					"content": {
						"korean": "브란의 경고는 차가운 동굴 속에서 메아리쳤다.",
						"english": "Bran's warning echoed in the cold cave.",
						"japanese": "ブランの警告は冷たい洞窟の中に木霊した。",
						"chinese": "布兰的警告在冰冷的洞穴中回荡。",
						"french": "L'avertissement de Bran résonnait dans la grotte froide.",
						"spanish": "La advertencia de Bran resonó en la fría cueva.",
						"vietnamese": "Lời cảnh báo của Bran vang vọng trong hang động lạnh lẽo.",
						"thai": "คำเตือนของแบรนสะท้อนก้องอยู่ในถ้ำที่หนาวเย็น",
						"hindi": "ब्रान की चेतावनी ठंडी गुफा में गूँज उठी।"
					},
					"type": "speech"
				}
			],
			"id": 9
		},
		{
			"win_dialogue": [
				{
					"speaker": "narrator",
					"content": {
						"korean": "정체 모를 보스가 쓰러졌다. 그러나 승리의 기색은 옅었다.",
						"english": "The unknown boss fell. But the feeling of victory was faint.",
						"japanese": "正体不明のボスは倒れた。しかし、勝利の気配は薄かった。",
						"chinese": "身份不明的Boss倒下了。然而，胜利的气息却很微弱。",
						"french": "Le boss inconnu est tombé. Mais le sentiment de victoire était ténu.",
						"spanish": "El jefe desconocido cayó. Pero el sentimiento de victoria era tenue.",
						"vietnamese": "Con boss không rõ danh tính đã ngã xuống. Nhưng cảm giác chiến thắng thật nhạt nhòa.",
						"thai": "บอสปริศนาล้มลง ทว่าความรู้สึกแห่งชัยชนะนั้นจางหายไป",
						"hindi": "अज्ञात बॉस गिर गया। लेकिन जीत का एहसास धुंधला था।"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "…승리했다고 생각하는가… 너 또한… 이 비극의 일부…",
						"english": "...Do you think you've won... You too... are part of this tragedy...",
						"japanese": "…勝利したと思っているのか…お前もまた…この悲劇の一部…",
						"chinese": "…你以为你赢了吗…你也是…这场悲剧的一部分…",
						"french": "...Crois-tu avoir gagné... Toi aussi... fais partie de cette tragédie...",
						"spanish": "...¿Crees que has ganado?... Tú también... eres parte de esta tragedia...",
						"vietnamese": "...Ngươi nghĩ mình đã thắng sao... Ngươi cũng vậy... là một phần của bi kịch này...",
						"thai": "...เจ้าคิดว่าเจ้าชนะแล้วหรือ... เจ้าเองก็... เป็นส่วนหนึ่งของโศกนาฏกรรมนี้...",
						"hindi": "...क्या तुम्हें लगता है कि तुम जीत गए हो... तुम भी... इस त्रासदी का हिस्सा हो..."
					},
					"emotion": "sad"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "무슨 소리야…",
						"english": "What are you talking about...",
						"japanese": "何を言っているんだ…",
						"chinese": "你在说什么…",
						"french": "De quoi parles-tu...",
						"spanish": "¿De qué hablas?",
						"vietnamese": "Ngươi đang nói gì vậy...",
						"thai": "เจ้ากำลังพูดเรื่องอะไร...",
						"hindi": "तुम क्या बात कर रहे हो..."
					},
					"emotion": "base"
				},
				{
					"duration_ms": 500,
					"action": "enter",
					"speaker": "bran",
					"type": "direction",
					"spot": [
						4,
						2
					]
				},
				{
					"emotion": "sad",
					"speaker": "bran",
					"content": {
						"korean": "…또 다시… 반복될 뿐…",
						"english": "...It will only... repeat again...",
						"japanese": "…また…繰り返されるだけだ…",
						"chinese": "…只会…再次重演…",
						"french": "...Cela ne fera que... se répéter...",
						"spanish": "...Solo se... repetirá de nuevo...",
						"vietnamese": "...Chỉ là... lặp lại mà thôi...",
						"thai": "...มันจะ... ซ้ำรอยเดิม...",
						"hindi": "...यह बस... फिर से दोहराया जाएगा..."
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator",
					"content": {
						"korean": "망령의 속삭임처럼, 비극의 그림자는 더욱 짙어졌다.",
						"english": "Like a whisper of a specter, the shadow of tragedy deepened.",
						"japanese": "亡霊の囁きのように、悲劇の影はさらに濃くなった。",
						"chinese": "如同亡灵的低语，悲剧的阴影更加浓重了。",
						"french": "Comme un murmure de spectre, l'ombre de la tragédie s'épaissit.",
						"spanish": "Como un susurro de espectro, la sombra de la tragedia se hizo más profunda.",
						"vietnamese": "Như tiếng thì thầm của một bóng ma, bóng tối bi kịch càng trở nên đậm đặc.",
						"thai": "ราวกับเสียงกระซิบของวิญญาณ เงาแห่งโศกนาฏกรรมยิ่งทวีความมืดมิด",
						"hindi": "एक भूत की फुसफुसाहट की तरह, त्रासदी की छाया और गहरी हो गई।"
					}
				}
			],
			"id": 15,
			"lose_dialogue": [
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "정체 모를 보스의 힘에 모든 것이 얼어붙었다.",
						"english": "Everything froze under the power of the unknown boss.",
						"japanese": "正体不明のボスの力に、全てが凍りついた。",
						"chinese": "在身份不明的Boss的力量下，一切都冻结了。",
						"french": "Tout s'est figé sous le pouvoir du boss inconnu.",
						"spanish": "Todo se congeló bajo el poder del jefe desconocido.",
						"vietnamese": "Mọi thứ đóng băng dưới sức mạnh của con boss không rõ danh tính.",
						"thai": "ทุกสิ่งถูกแช่แข็งภายใต้พลังของบอสปริศนา",
						"hindi": "अज्ञात बॉस की शक्ति के आगे सब कुछ जम गया।"
					},
					"emotion": "base"
				},
				{
					"emotion": "base",
					"speaker": "random_boss",
					"content": {
						"korean": "…아직… 깨닫지 못했는가…",
						"english": "...Still... you haven't realized...?",
						"japanese": "…まだ…気づかぬか…",
						"chinese": "…还未…醒悟吗…",
						"french": "...Tu n'as toujours pas réalisé...?",
						"spanish": "¿...Aún... no te has dado cuenta...?",
						"vietnamese": "...Vẫn chưa... nhận ra sao...?",
						"thai": "...ยัง...ไม่รู้ตัวอีกหรือ...",
						"hindi": "...अभी तक... एहसास नहीं हुआ...?"
					},
					"type": "speech"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "끝까지… 포기하지 않아…!",
						"english": "I won't give up... until the very end...!",
						"japanese": "最後まで…諦めない…！",
						"chinese": "到最后…也绝不放弃…！",
						"french": "Je n'abandonnerai pas... jusqu'au bout...!",
						"spanish": "¡No me rendiré... hasta el final...!",
						"vietnamese": "Không từ bỏ... đến cùng...!",
						"thai": "จะไม่ยอมแพ้...จนถึงที่สุด...!",
						"hindi": "मैं अंत तक... हार नहीं मानूंगा...!"
					},
					"emotion": "angry",
					"type": "speech"
				},
				{
					"spot": [
						4,
						2
					],
					"type": "direction",
					"speaker": "bran",
					"action": "enter",
					"duration_ms": 500
				},
				{
					"speaker": "bran",
					"content": {
						"korean": "…덧없는 발버둥…",
						"english": "...A futile struggle...",
						"japanese": "…儚い足掻き…",
						"chinese": "…徒劳的挣扎…",
						"french": "...Lutte vaine...",
						"spanish": "...Vano forcejeo...",
						"vietnamese": "...Sự vùng vẫy vô ích...",
						"thai": "...การดิ้นรนที่เปล่าประโยชน์...",
						"hindi": "...व्यर्थ का संघर्ष..."
					},
					"emotion": "sad",
					"type": "speech"
				}
			],
			"dialogue": [
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator",
					"content": {
						"korean": "동굴의 가장 깊은 곳. 거대한 그림자가 앞을 가로막았다.",
						"english": "The deepest part of the cave. A giant shadow blocked the way.",
						"japanese": "洞窟の最深部。巨大な影が道を塞いだ。",
						"chinese": "洞穴最深处。一道巨大的黑影挡住了去路。",
						"french": "La partie la plus profonde de la grotte. Une ombre gigantesque barra la route.",
						"spanish": "La parte más profunda de la cueva. Una sombra gigantesca bloqueaba el paso.",
						"vietnamese": "Nơi sâu nhất của hang động. Một bóng đen khổng lồ chặn đường.",
						"thai": "ส่วนที่ลึกที่สุดของถ้ำ เงายักษ์ขวางทางอยู่",
						"hindi": "गुफा का सबसे गहरा हिस्सा। एक विशाल परछाई ने रास्ता रोक दिया।"
					}
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "random_boss",
					"content": {
						"korean": "…침입자… 이곳의 비극을… 다시 일깨우려는가.",
						"english": "...Intruder... Do you seek to reawaken... the tragedy of this place?",
						"japanese": "…侵入者…ここの悲劇を…再び呼び起こすつもりか。",
						"chinese": "…入侵者…想再次唤醒…此地的悲剧吗？",
						"french": "...Intrus... Cherches-tu à réveiller... la tragédie de ce lieu ?",
						"spanish": "...Intruso... ¿Buscas despertar de nuevo... la tragedia de este lugar?",
						"vietnamese": "...Kẻ xâm nhập... Ngươi muốn đánh thức lại... bi kịch nơi đây sao?",
						"thai": "...ผู้บุกรุก... เจ้าปรารถนาที่จะปลุก... โศกนาฏกรรมแห่งนี้ขึ้นมาอีกครั้งหรือ",
						"hindi": "...घुसपैठिए... क्या तुम... इस जगह की त्रासदी को... फिर से जगाना चाहते हो?"
					}
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "네가 이 모든 걸 지키고 있는 건가?",
						"english": "Are you protecting all of this?",
						"japanese": "お前がこの全てを守っているのか？",
						"chinese": "你守护着这一切吗？",
						"french": "C'est toi qui protèges tout ça ?",
						"spanish": "¿Estás protegiendo todo esto?",
						"vietnamese": "Ngươi đang bảo vệ tất cả những thứ này sao?",
						"thai": "เจ้ากำลังปกป้องทั้งหมดนี้หรือ",
						"hindi": "क्या तुम यह सब कुछ बचा रहे हो?"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "random_boss",
					"content": {
						"korean": "나는… 이 땅의 잊힌 죄… 그 자체다.",
						"english": "I am... the forgotten sin... of this land itself.",
						"japanese": "私は…この地の忘れられた罪…そのものだ。",
						"chinese": "我就是…这片土地…被遗忘的罪孽本身。",
						"french": "Je suis... le péché oublié... de cette terre elle-même.",
						"spanish": "Yo soy... el pecado olvidado... de esta misma tierra.",
						"vietnamese": "Ta là... tội lỗi bị lãng quên... của vùng đất này.",
						"thai": "ฉันคือ... บาปที่ถูกลืมเลือน... ของดินแดนแห่งนี้เอง",
						"hindi": "मैं हूँ... इस भूमि का... भूला हुआ पाप।"
					}
				}
			]
		}
	],
	"prologue": {
		"korean": [
			"차가운 동굴 속, 얼어붙은 시간은 멈추지 않았다.",
			"길 잃은 망령이 속삭이는 고대 서약.",
			"모든 비극은 반복된다. 벗어날 수 없는 운명처럼.",
			"그리고 그 중심에, 잊힌 죄의 기록이 새겨져 있었다."
		],
		"english": [
			"Inside the cold cave, frozen time never ceased.",
			"Ancient vows whispered by lost specters.",
			"All tragedies repeat. Like an inescapable fate.",
			"And at its heart, the record of forgotten sins was etched."
		],
		"japanese": [
			"冷たい洞窟の中で、凍てついた時間は止まらなかった。",
			"道に迷った亡霊が囁く古の誓約。",
			"全ての悲劇は繰り返される。逃れられない運命のように。",
			"そしてその中心には、忘れられた罪の記録が刻まれていた。"
		],
		"chinese": [
			"在冰冷的洞穴中，冻结的时间从未停止。",
			"迷失的亡灵低语着古老的誓约。",
			"所有悲剧都会重演。如同无法逃避的命运。",
			"而在其核心，刻着被遗忘的罪孽记录。"
		],
		"french": [
			"Dans la grotte froide, le temps gelé n'a jamais cessé.",
			"D'anciens serments murmurés par des spectres égarés.",
			"Toutes les tragédies se répètent. Comme un destin inéluctable.",
			"Et en son cœur, la marque des péchés oubliés était gravée."
		],
		"spanish": [
			"Dentro de la fría cueva, el tiempo congelado nunca se detuvo.",
			"Antiguos juramentos susurrados por espectros perdidos.",
			"Todas las tragedias se repiten. Como un destino ineludible.",
			"Y en su corazón, el registro de pecados olvidados estaba grabado."
		],
		"vietnamese": [
			"Bên trong hang động lạnh giá, thời gian đóng băng không ngừng trôi.",
			"Lời thề cổ xưa thì thầm bởi những bóng ma lạc lối.",
			"Mọi bi kịch đều lặp lại. Như một số phận không thể tránh khỏi.",
			"Và ở trung tâm của nó, ghi chép về những tội lỗi bị lãng quên đã được khắc."
		],
		"thai": [
			"ภายในถ้ำอันเยือกเย็น เวลาที่หยุดนิ่งไม่เคยหยุดลง",
			"คำสาบานโบราณที่กระซิบโดยวิญญาณหลงทาง",
			"โศกนาฏกรรมทั้งหมดซ้ำรอย ราวกับโชคชะตาที่ไม่อาจหลีกเลี่ยง",
			"และ ณ ใจกลางของมัน บันทึกบาปที่ถูกลืมได้ถูกสลักไว้"
		],
		"hindi": [
			"ठंडी गुफा के अंदर, जमा हुआ समय कभी रुका नहीं।",
			"भटके हुए भूतों द्वारा फुसफुसाए गए प्राचीन वादे।",
			"सभी दुख दोहराए जाते हैं। एक अपरिहार्य भाग्य की तरह।",
			"और इसके केंद्र में, भूले हुए पापों का रिकॉर्ड अंकित था।"
		]
	}
} as const;
