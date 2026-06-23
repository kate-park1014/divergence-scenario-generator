export const scenario_snowy_skaldswail_77_04 = {
	"scenario_id": "snowy_skaldswail_77_04",
	"order": 4,
	"act": "rising",
	"theme": "snowy",
	"actors": {
		"glace": {
			"id": "mon_d0b542b9-aea9-405d-8ee2-4936516a041a",
			"name": {
				"korean": "글라세",
				"english": "Glace",
				"japanese": "グラース",
				"chinese": "格拉斯",
				"french": "Glace",
				"spanish": "Glace",
				"vietnamese": "Gla-xê",
				"thai": "กลาซ",
				"hindi": "ग्लेस"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/81de374f-3422-482e-01ee-dc973da70500/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/ef269701-044a-42c5-f7b7-760e9c92a500/public"
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
					"content": {
						"korean": "얼어붙은 강줄기가 끝없이 이어졌다. 모든 소리는 왜곡되어 들렸다.",
						"english": "The frozen river stretched endlessly. All sounds were distorted.",
						"japanese": "凍てついた川筋がどこまでも続いていた。すべての音が歪んで聞こえた。",
						"chinese": "冰冻的河流绵延不绝。所有的声音都扭曲了。",
						"french": "La rivière gelée s'étendait à l'infini. Tous les sons étaient déformés.",
						"spanish": "El río helado se extendía sin fin. Todos los sonidos estaban distorsionados.",
						"vietnamese": "Dòng sông đóng băng trải dài vô tận. Mọi âm thanh đều bị méo mó.",
						"thai": "แม่น้ำที่แข็งตัวทอดยาวไม่มีที่สิ้นสุด เสียงทั้งหมดบิดเบือนไป",
						"hindi": "जमी हुई नदी अंतहीन रूप से फैली हुई थी। सभी आवाजें विकृत सुनाई दे रही थीं।"
					},
					"speaker": "narrator",
					"type": "speech"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "이상한 노래… 어디선가 들려.",
						"english": "A strange song... I hear it from somewhere.",
						"japanese": "奇妙な歌…どこからか聞こえる。",
						"chinese": "奇怪的歌声……从某个地方传来。",
						"french": "Une chanson étrange... Je l'entends de quelque part.",
						"spanish": "Una canción extraña... La oigo de algún lugar.",
						"vietnamese": "Một bài hát lạ... Nghe thấy từ đâu đó.",
						"thai": "เพลงแปลกๆ... ได้ยินมาจากที่ไหนสักแห่ง",
						"hindi": "एक अजीब गाना... कहीं से सुनाई दे रहा है।"
					},
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "글라세?",
						"english": "Glase?",
						"japanese": "グラッセ？",
						"chinese": "格拉塞？",
						"french": "Glase ?",
						"spanish": "¿Glase?",
						"vietnamese": "Glase?",
						"thai": "กลาเซ่?",
						"hindi": "ग्लेस?"
					},
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"spot": [
						5,
						2
					],
					"duration_ms": 500,
					"action": "enter",
					"type": "direction",
					"speaker": "glace"
				},
				{
					"speaker": "glace",
					"type": "speech",
					"content": {
						"korean": "…(나지막이 콧노래를 흥얼거린다)",
						"english": "...(Hums softly)",
						"japanese": "…(静かに鼻歌を歌う)",
						"chinese": "……（轻轻哼着歌）",
						"french": "...(Fredonne doucement)",
						"spanish": "...(Tararea suavemente)",
						"vietnamese": "...(Hát thầm nhẹ nhàng)",
						"thai": "...(ฮัมเพลงเบาๆ)",
						"hindi": "...(धीरे से गुनगुनाता है)"
					},
					"emotion": "base"
				},
				{
					"speaker": "character_1",
					"type": "speech",
					"content": {
						"korean": "너… 괜찮아 보여서 다행이야.",
						"english": "I'm glad you seem okay.",
						"japanese": "君…元気そうでよかった。",
						"chinese": "你……看起来没事，真是太好了。",
						"french": "Je suis content que tu ailles bien.",
						"spanish": "Me alegra que parezcas estar bien.",
						"vietnamese": "May quá, trông cậu có vẻ ổn.",
						"thai": "ฉันดีใจที่เธอดูสบายดี",
						"hindi": "मुझे खुशी है कि तुम ठीक लग रही हो।"
					},
					"emotion": "base"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "응. 아주 평화로워. 너희도 곧 그렇게 될 거야.",
						"english": "Yes. Very peaceful. You will all be like this soon.",
						"japanese": "うん。とても平和だよ。君たちもすぐそうなるだろう。",
						"chinese": "嗯。很平静。你们很快也会这样的。",
						"french": "Oui. Très paisible. Vous le serez tous bientôt.",
						"spanish": "Sí. Muy tranquilo. Vosotros también lo estaréis pronto.",
						"vietnamese": "Ừ. Rất bình yên. Các cậu cũng sẽ sớm được như vậy thôi.",
						"thai": "ใช่ สงบมาก พวกเธอทุกคนก็จะสงบแบบนี้ในไม่ช้า",
						"hindi": "हाँ। बहुत शांतिपूर्ण। तुम सब भी जल्द ही ऐसे ही हो जाओगे।"
					},
					"speaker": "glace",
					"type": "speech"
				}
			]
		},
		{
			"id": 3,
			"dialogue": [
				{
					"spot": [
						2,
						2
					],
					"duration_ms": 500,
					"action": "enter",
					"type": "direction",
					"speaker": "glace"
				},
				{
					"content": {
						"korean": "글라세의 눈은 투명했다. 아무것도 담고 있지 않았다.",
						"english": "Glace's eyes were transparent. They held nothing.",
						"japanese": "グラッセの瞳は透き通っていた。何も宿していなかった。",
						"chinese": "格拉塞的眼睛是透明的。什么都没有。",
						"french": "Les yeux de Glace étaient transparents. Ils ne contenaient rien.",
						"spanish": "Los ojos de Glace eran transparentes. No contenían nada.",
						"vietnamese": "Đôi mắt của Glace trong suốt. Không chứa đựng bất cứ điều gì.",
						"thai": "ดวงตาของกลาเซโปร่งใส ไม่ได้บรรจุอะไรเลย",
						"hindi": "ग्लेस की आँखें पारदर्शी थीं। उनमें कुछ भी नहीं था।"
					},
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "글라세, 제발… 이 노래는 우리를 속이는 거야. 잊으면 안 돼.",
						"english": "Glace, please... This song is deceiving us. We mustn't forget.",
						"japanese": "グラッセ、お願い…この歌は私たちを欺いているの。忘れちゃだめよ。",
						"chinese": "格拉塞，求你了……这首歌在欺骗我们。我们不能忘记。",
						"french": "Glace, s'il te plaît… Cette chanson nous trompe. Il ne faut pas oublier.",
						"spanish": "Glace, por favor... Esta canción nos está engañando. No debemos olvidar.",
						"vietnamese": "Glace, làm ơn đi… Bài hát này đang lừa dối chúng ta. Chúng ta không được quên.",
						"thai": "กลาเซ ได้โปรด... เพลงนี้กำลังหลอกลวงเรา เราต้องไม่ลืม",
						"hindi": "ग्लेस, प्लीज़… यह गाना हमें धोखा दे रहा है। हमें भूलना नहीं चाहिए।"
					},
					"emotion": "sad"
				},
				{
					"speaker": "glace",
					"type": "speech",
					"content": {
						"korean": "뭘 잊어? 모든 게 이렇게 아름다운 걸. 고통도 사라졌는데.",
						"english": "Forget what? Everything is so beautiful. The pain is gone too.",
						"japanese": "何を忘れるの？すべてがこんなに美しいのに。苦しみも消えたのに。",
						"chinese": "忘记什么？一切都这么美好。痛苦也消失了。",
						"french": "Oublier quoi ? Tout est si beau. La douleur a disparu aussi.",
						"spanish": "Olvidar qué? Todo es tan hermoso. El dolor también se ha ido.",
						"vietnamese": "Quên cái gì chứ? Mọi thứ đều đẹp đẽ thế này mà. Cả nỗi đau cũng biến mất rồi.",
						"thai": "ลืมอะไร? ทุกอย่างสวยงามขนาดนี้ ความเจ็บปวดก็หายไปแล้วนี่",
						"hindi": "क्या भूलूं? सब कुछ इतना सुंदर है। दर्द भी चला गया।"
					},
					"emotion": "base"
				},
				{
					"content": {
						"korean": "아니야! 우리는 싸워야 해!",
						"english": "No! We have to fight!",
						"japanese": "違う！私たちは戦わなくちゃ！",
						"chinese": "不！我们必须战斗！",
						"french": "Non ! Nous devons nous battre !",
						"spanish": "¡No! ¡Tenemos que luchar!",
						"vietnamese": "Không! Chúng ta phải chiến đấu!",
						"thai": "ไม่! เราต้องสู้!",
						"hindi": "नहीं! हमें लड़ना होगा!"
					},
					"speaker": "character_2",
					"type": "speech",
					"emotion": "angry"
				},
				{
					"emotion": "base",
					"speaker": "glace",
					"type": "speech",
					"content": {
						"korean": "…싸워봤자 뭐해. 결국 고통뿐인데.",
						"english": "...What's the point of fighting? In the end, there's only pain.",
						"japanese": "…戦っても無駄よ。結局苦しいだけなのに。",
						"chinese": "……战斗有什么用？最终只有痛苦而已。",
						"french": "…À quoi bon se battre ? Il n'y a que la douleur au final.",
						"spanish": "...¿Para qué luchar? Al final, solo hay dolor.",
						"vietnamese": "…Đánh nhau thì có ích gì chứ. Cuối cùng cũng chỉ toàn đau khổ thôi.",
						"thai": "...สู้ไปก็เท่านั้น สุดท้ายก็มีแต่ความเจ็บปวด",
						"hindi": "लड़कर क्या फायदा। अंत में तो बस दर्द ही है।"
					}
				}
			]
		},
		{
			"id": 5,
			"dialogue": [
				{
					"spot": [
						3,
						2
					],
					"duration_ms": 500,
					"speaker": "glace",
					"action": "enter",
					"type": "direction"
				},
				{
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "얼어붙은 강가에 멈춰선 시신들이 널려 있었다. 그들의 얼굴은 평온했다.",
						"english": "Corpses lay scattered along the frozen riverbank. Their faces were serene.",
						"japanese": "凍りついた川辺に、立ち止まったままの遺体が散らばっていた。彼らの顔は穏やかだった。",
						"chinese": "冰冻的河岸边散落着停滞的尸体。他们的脸上带着平静。",
						"french": "Des corps gisaient éparpillés sur la rive gelée. Leurs visages étaient sereins.",
						"spanish": "Cadáveres yacían dispersos a lo largo de la orilla helada del río. Sus rostros estaban serenos.",
						"vietnamese": "Dọc bờ sông đóng băng, những thi thể nằm rải rác như đang đứng yên. Khuôn mặt họ thanh thản.",
						"thai": "มีศพเกลื่อนกลาดอยู่ริมฝั่งแม่น้ำที่เยือกแข็ง ใบหน้าของพวกเขาดูสงบ",
						"hindi": "जमी हुई नदी के किनारे ठहरे हुए शव बिखरे पड़े थे। उनके चेहरे शांत थे।"
					},
					"emotion": "base"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "저… 저 사람들도 다… 포기한 거야?",
						"english": "Th-those people… did they all give up too?",
						"japanese": "あ…あの人たちもみんな…諦めたの？",
						"chinese": "那…那些人也……都放弃了吗？",
						"french": "C-ces gens… eux aussi ont tous abandonné ?",
						"spanish": "Es-esas personas… ¿ellos también se rindieron?",
						"vietnamese": "Họ… những người đó cũng… bỏ cuộc hết rồi sao?",
						"thai": "พ-พวกเขา... พวกเขาก็ยอมแพ้แล้วเหรอ?",
						"hindi": "व-वो लोग भी… सब हार मान गए क्या?"
					},
					"emotion": "sad"
				},
				{
					"emotion": "happy",
					"content": {
						"korean": "그래. 이제 아무 고통 없이 잠들 거야. 영원히. 얼마나 평화로워.",
						"english": "Yes. Now they'll sleep without any pain. Forever. How peaceful.",
						"japanese": "ええ。もう何の苦痛もなく眠りにつくのよ。永遠に。なんて平和なの。",
						"chinese": "是啊。现在他们会毫无痛苦地睡去。永远。多麼平静啊。",
						"french": "Oui. Maintenant, ils vont dormir sans aucune douleur. Pour toujours. Quelle paix.",
						"spanish": "Sí. Ahora dormirán sin dolor alguno. Para siempre. Qué paz.",
						"vietnamese": "Đúng vậy. Giờ họ sẽ ngủ yên mà không có bất cứ nỗi đau nào. Mãi mãi. Thật bình yên.",
						"thai": "ใช่ ตอนนี้พวกเขาจะหลับไหลไปโดยปราศจากความเจ็บปวดใดๆ ตลอดไป ช่างสงบสุขเหลือเกิน",
						"hindi": "हाँ। अब वे बिना किसी दर्द के सो जाएंगे। हमेशा के लिए। कितनी शांति है।"
					},
					"speaker": "glace",
					"type": "speech"
				},
				{
					"speaker": "character_3",
					"type": "speech",
					"content": {
						"korean": "미쳤어, 글라세! 우리도 그렇게 될 거라고!",
						"english": "You're crazy, Glace! We'll end up like that too!",
						"japanese": "馬鹿なこと言わないで、グラッセ！私たちもああなるってことよ！",
						"chinese": "你疯了，格拉塞！我们也会变成那样！",
						"french": "Tu es folle, Glace ! Nous allons finir comme ça aussi !",
						"spanish": "¡Estás loca, Glace! ¡Nosotras también terminaremos así!",
						"vietnamese": "Mày điên rồi, Glace! Chúng ta cũng sẽ thành ra như vậy đó!",
						"thai": "กลาเซ บ้าไปแล้ว! เราก็จะเป็นแบบนั้นเหมือนกัน!",
						"hindi": "तुम पागल हो, ग्लेस! हम भी वैसे ही हो जाएंगे!"
					},
					"emotion": "angry"
				},
				{
					"emotion": "base",
					"speaker": "glace",
					"type": "speech",
					"content": {
						"korean": "…그게 뭐가 나빠? 결국엔 모두 평화로워질 텐데.",
						"english": "...What's so bad about that? Everyone will find peace in the end.",
						"japanese": "…それが何が悪いの？結局みんな平和になるだけよ。",
						"chinese": "……那有什么不好？最终所有人都会平静下来。",
						"french": "…Qu'est-ce qu'il y a de mal à ça ? Au final, tout le monde trouvera la paix.",
						"spanish": "...¿Qué tiene de malo eso? Al final, todos encontrarán la paz.",
						"vietnamese": "…Cái đó có gì xấu đâu? Cuối cùng thì mọi người cũng sẽ bình yên thôi mà.",
						"thai": "...มันไม่ดียังไง? สุดท้ายทุกคนก็จะสงบสุข",
						"hindi": "उसमें क्या बुराई है? अंत में तो सब शांति पाएंगे।"
					}
				}
			]
		},
		{
			"id": 9,
			"dialogue": [
				{
					"duration_ms": 500,
					"action": "enter",
					"type": "direction",
					"speaker": "glace",
					"spot": [
						4,
						2
					]
				},
				{
					"emotion": "angry",
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "글라세, 제발 정신 차려! 여기서 나가야 해!",
						"english": "Glace, please snap out of it! We have to get out of here!",
						"japanese": "グラッセ、しっかりして！ここから出ないと！",
						"chinese": "格蕾丝，请清醒过来！我们必须离开这里！",
						"french": "Glace, s'il te plaît, reprends tes esprits ! Il faut qu'on sorte d'ici !",
						"spanish": "¡Glace, por favor, reacciona! ¡Tenemos que salir de aquí!",
						"vietnamese": "Glace, làm ơn tỉnh lại đi! Chúng ta phải ra khỏi đây!",
						"thai": "กลาเซ่ ได้โปรดฟื้นตัวขึ้นมา! เราต้องออกไปจากที่นี่!",
						"hindi": "ग्लेस, कृपया होश में आओ! हमें यहाँ से निकलना होगा!"
					}
				},
				{
					"content": {
						"korean": "왜? 여기가 가장 완벽한데. 너희도 곧 알게 될 거야.",
						"english": "Why? This place is perfect. You'll understand soon enough.",
						"japanese": "なぜ？ここが一番完璧なのに。あなたたちもすぐにわかるわ。",
						"chinese": "为什么？这里最完美。你们很快就会明白的。",
						"french": "Pourquoi ? Cet endroit est parfait. Vous comprendrez bientôt.",
						"spanish": "¿Por qué? Este lugar es perfecto. Pronto lo entenderéis.",
						"vietnamese": "Tại sao? Nơi đây hoàn hảo nhất mà. Các ngươi cũng sẽ sớm nhận ra thôi.",
						"thai": "ทำไมล่ะ? ที่นี่สมบูรณ์แบบที่สุดเลยนะ พวกเธอเองก็จะได้รู้ในไม่ช้า",
						"hindi": "क्यों? यह जगह सबसे सही है। तुम भी जल्द ही जान जाओगे।"
					},
					"speaker": "glace",
					"type": "speech",
					"emotion": "base"
				},
				{
					"emotion": "happy",
					"content": {
						"korean": "이 평화가 주는 진정한 의미를. 텅 비어가는 느낌이 이렇게 행복한 건지.",
						"english": "The true meaning of this peace. How emptying myself can be so blissful.",
						"japanese": "この平和がくれる本当の意味を。空っぽになっていく感覚がこんなにも幸せだなんて。",
						"chinese": "这份宁静的真正含义。这种逐渐空虚的感觉竟是如此幸福。",
						"french": "Le vrai sens de cette paix. À quel point ce sentiment de vide peut être heureux.",
						"spanish": "El verdadero significado de esta paz. Cómo vaciarse puede ser tan dichoso.",
						"vietnamese": "Ý nghĩa thực sự của sự bình yên này. Cảm giác trống rỗng dần này lại hạnh phúc đến thế.",
						"thai": "ความหมายที่แท้จริงของสันติภาพนี้ ความรู้สึกที่ว่างเปล่าลงไปเรื่อยๆ ช่างมีความสุขขนาดนี้",
						"hindi": "इस शांति का सच्चा अर्थ। खाली होते जाने का एहसास इतना आनंदमय कैसे हो सकता है।"
					},
					"speaker": "glace",
					"type": "speech"
				},
				{
					"content": {
						"korean": "안 돼! 난 포기 안 해!",
						"english": "No! I won't give up!",
						"japanese": "ダメだ！私は諦めない！",
						"chinese": "不！我不会放弃的！",
						"french": "Non ! Je n'abandonnerai pas !",
						"spanish": "¡No! ¡No me rendiré!",
						"vietnamese": "Không! Ta sẽ không bỏ cuộc!",
						"thai": "ไม่นะ! ฉันไม่ยอมแพ้!",
						"hindi": "नहीं! मैं हार नहीं मानूँगा!"
					},
					"speaker": "character_4",
					"type": "speech",
					"emotion": "angry"
				},
				{
					"emotion": "base",
					"speaker": "glace",
					"type": "speech",
					"content": {
						"korean": "…(멀리서 들려오는 노래를 들으며 미소 짓는다)",
						"english": "...(Smiles, listening to a distant song)",
						"japanese": "…（遠くから聞こえる歌を聴きながら微笑む）",
						"chinese": "……（听着远处传来的歌声，微笑着）",
						"french": "...(Sourit en écoutant un chant lointain)",
						"spanish": "...(Sonríe, escuchando una canción lejana)",
						"vietnamese": "...(Mỉm cười, lắng nghe bài hát từ xa)",
						"thai": "...(ยิ้มขณะฟังเพลงที่ดังมาจากที่ไกลๆ)",
						"hindi": "...(दूर से आती धุน सुनकर मुस्कुराता है)"
					}
				},
				{
					"content": {
						"korean": "텅 빈 웃음소리가 얼어붙은 강을 따라 퍼졌다. 되돌릴 수 없는 곳이었다.",
						"english": "Empty laughter echoed along the frozen river. It was a point of no return.",
						"japanese": "虚ろな笑い声が凍りついた川に沿って響き渡った。もう引き返せない場所だった。",
						"chinese": "空洞的笑声沿着冰冻的河流蔓延开来。那是无法回头的境地。",
						"french": "Un rire vide résonna le long de la rivière gelée. C'était un point de non-retour.",
						"spanish": "Una risa vacía resonó a lo largo del río helado. Era un punto sin retorno.",
						"vietnamese": "Tiếng cười trống rỗng vang vọng dọc con sông đóng băng. Đó là nơi không thể quay trở lại.",
						"thai": "เสียงหัวเราะที่ว่างเปล่าก้องไปตามแม่น้ำที่กลายเป็นน้ำแข็ง มันเป็นที่ที่ไม่อาจย้อนกลับได้",
						"hindi": "खाली हँसी जमी हुई नदी के किनारे गूँज उठी। यह वापस न लौटने वाली जगह थी।"
					},
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base"
				}
			]
		},
		{
			"dialogue": [
				{
					"content": {
						"korean": "거대한 그림자가 앞을 가로막았다. 모든 소리를 집어삼킬 듯했다.",
						"english": "A colossal shadow blocked the way. It seemed to devour all sound.",
						"japanese": "巨大な影が道を塞いだ。全ての音を飲み込むかのようだった。",
						"chinese": "巨大的阴影挡住了去路。它似乎要吞噬所有的声音。",
						"french": "Une ombre colossale bloquait le chemin. Elle semblait dévorer tout son.",
						"spanish": "Una sombra colosal bloqueó el camino. Parecía devorar todo sonido.",
						"vietnamese": "Một cái bóng khổng lồ chắn ngang đường. Nó dường như nuốt chửng mọi âm thanh.",
						"thai": "เงาขนาดมหึมาขวางทางอยู่ มันดูเหมือนจะกลืนกินทุกสรรพเสียง",
						"hindi": "एक विशालकाय परछाई ने रास्ता रोक लिया। ऐसा लगा मानो वह हर आवाज़ को निगल जाएगी।"
					},
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base"
				},
				{
					"speaker": "random_boss",
					"type": "speech",
					"content": {
						"korean": "…환영한다. 새로운 손님들. 너희도 이 노래에 취했겠지.",
						"english": "...Welcome. New guests. You too must be enchanted by this song.",
						"japanese": "…ようこそ。新しい客たち。お前たちもこの歌に酔いしれたのだろう？",
						"chinese": "……欢迎。新来的客人。你们也一定被这首歌迷住了吧。",
						"french": "...Bienvenue. Nouveaux invités. Vous aussi, vous devez être envoûtés par ce chant.",
						"spanish": "...Bienvenidos. Nuevos invitados. Vosotros también debéis estar hechizados por esta canción.",
						"vietnamese": "...",
						"thai": "...ยินดีต้อนรับ แขกผู้มาใหม่ พวกเจ้าเองก็คงจะเคลิบเคลิ้มไปกับบทเพลงนี้แล้วสินะ",
						"hindi": "...स्वागत है। नए मेहमानो। तुम भी इस गीत से मंत्रमुग्ध हो गए होगे।"
					},
					"emotion": "base"
				},
				{
					"emotion": "angry",
					"content": {
						"korean": "네가… 이 모든 환상의 근원인가!",
						"english": "You... are you the source of all these illusions!",
						"japanese": "お前が…この全ての幻想の根源なのか！",
						"chinese": "你……你就是所有这些幻象的根源吗！",
						"french": "Toi... es-tu la source de toutes ces illusions !",
						"spanish": "¡Tú... eres la fuente de todas estas ilusiones!",
						"vietnamese": "Ngươi… Ngươi là nguồn gốc của tất cả ảo ảnh này sao!",
						"thai": "แก... เป็นต้นกำเนิดของภาพลวงตาทั้งหมดนี้งั้นหรือ!",
						"hindi": "तुम... क्या तुम इन सभी भ्रमों का स्रोत हो!"
					},
					"speaker": "character_any",
					"type": "speech"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "환상? 이건 구원이다. 영원한 안식.",
						"english": "Illusions? This is salvation. Eternal rest.",
						"japanese": "幻想？これは救済だ。永遠の安息。",
						"chinese": "幻象？这是救赎。永恒的安息。",
						"french": "Illusions ? C'est le salut. Un repos éternel.",
						"spanish": "¿Ilusiones? Esto es la salvación. El descanso eterno.",
						"vietnamese": "Ảo ảnh? Đây là sự cứu rỗi. An nghỉ vĩnh hằng.",
						"thai": "ภาพลวงตาเหรอ? นี่คือการช่วยให้รอดต่างหาก การพักผ่อนชั่วนิรันดร์",
						"hindi": "भ्रम? यह मुक्ति है। शाश्वत शांति।"
					},
					"speaker": "random_boss",
					"type": "speech"
				},
				{
					"spot": [
						1,
						2
					],
					"speaker": "glace",
					"action": "enter",
					"type": "direction",
					"duration_ms": 500
				},
				{
					"emotion": "base",
					"content": {
						"korean": "구원… 맞아. 이제 아무것도 원하지 않아.",
						"english": "Salvation... right. I desire nothing now.",
						"japanese": "救済…そうね。もう何も望まないわ。",
						"chinese": "救赎…没错。我现在什么都不想要了。",
						"french": "Salut... Oui. Je ne désire plus rien maintenant.",
						"spanish": "Salvación... Así es. Ahora no deseo nada.",
						"vietnamese": "Cứu rỗi... đúng vậy. Giờ tôi không còn muốn gì nữa.",
						"thai": "ความรอด... ใช่แล้ว ตอนนี้ฉันไม่ต้องการอะไรอีกแล้ว",
						"hindi": "मुक्ति... सही है। अब मुझे कुछ नहीं चाहिए।"
					},
					"speaker": "glace",
					"type": "speech"
				},
				{
					"content": {
						"korean": "글라세…! 제발!",
						"english": "Glace...! Please!",
						"japanese": "グラッセ…！お願い！",
						"chinese": "格莱斯…！求你了！",
						"french": "Glace...! S'il te plaît !",
						"spanish": "Glace...! ¡Por favor!",
						"vietnamese": "Glace...! Làm ơn!",
						"thai": "แกลส...! ได้โปรด!",
						"hindi": "ग्लेस...! कृपया!"
					},
					"speaker": "character_any",
					"type": "speech",
					"emotion": "sad"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "어리석은 자들. 너희도 곧 이 평화를 받아들이게 될 것이다.",
						"english": "Fools. You too will soon embrace this peace.",
						"japanese": "愚かな者たち。お前たちもやがてこの平和を受け入れるだろう。",
						"chinese": "愚蠢之人。你们也很快会接受这份平静。",
						"french": "Imbéciles. Vous aussi finirez par accepter cette paix.",
						"spanish": "Necios. Vosotros también aceptaréis esta paz pronto.",
						"vietnamese": "Những kẻ ngu ngốc. Các ngươi cũng sẽ sớm chấp nhận sự bình yên này thôi.",
						"thai": "พวกคนโง่เง่า เจ้าก็จะยอมรับความสงบนี้ในไม่ช้า",
						"hindi": "मूर्ख। तुम भी जल्द ही इस शांति को स्वीकार कर लोगे।"
					},
					"speaker": "random_boss",
					"type": "speech"
				},
				{
					"emotion": "angry",
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "결코! 우리는 너를 막을 거야!",
						"english": "Never! We will stop you!",
						"japanese": "断じて！私たちはあなたを止める！",
						"chinese": "绝不！我们会阻止你！",
						"french": "Jamais ! Nous t'arrêterons !",
						"spanish": "¡Jamás! ¡Te detendremos!",
						"vietnamese": "Không đời nào! Chúng ta sẽ ngăn ngươi lại!",
						"thai": "ไม่มีทาง! เราจะหยุดเจ้าให้ได้!",
						"hindi": "कभी नहीं! हम तुम्हें रोकेंगे!"
					}
				}
			],
			"lose_dialogue": [
				{
					"content": {
						"korean": "맹렬한 공격이 모든 것을 얼어붙게 했다. 몸이 말을 듣지 않았다.",
						"english": "A fierce attack froze everything. My body wouldn't obey.",
						"japanese": "猛烈な攻撃が全てを凍らせた。体が言うことを聞かない。",
						"chinese": "猛烈的攻击冻结了一切。身体不听使唤了。",
						"french": "Une attaque féroce a tout gelé. Mon corps ne m'obéissait plus.",
						"spanish": "Un ataque feroz lo congeló todo. Mi cuerpo no respondía.",
						"vietnamese": "Một đòn tấn công dữ dội đã đóng băng mọi thứ. Cơ thể tôi không còn nghe lời nữa.",
						"thai": "การโจมตีอันดุเดือดทำให้ทุกสิ่งหยุดนิ่ง ร่างกายไม่ยอมเชื่อฟัง",
						"hindi": "एक भयंकर हमले ने सब कुछ जमा दिया। मेरा शरीर आज्ञा नहीं मान रहा था।"
					},
					"speaker": "narrator",
					"type": "speech",
					"emotion": "base"
				},
				{
					"emotion": "angry",
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "…젠장. 아직은 아니야.",
						"english": "...Damn it. Not yet.",
						"japanese": "…くそ。まだだ。",
						"chinese": "…该死。还没到时候。",
						"french": "...Mince. Pas encore.",
						"spanish": "...Maldita sea. Todavía no.",
						"vietnamese": "...Chết tiệt. Vẫn chưa được.",
						"thai": "...บ้าจริง. ยังไม่ถึงเวลา.",
						"hindi": "...धिक्कार है। अभी नहीं।"
					}
				},
				{
					"content": {
						"korean": "저항은 무의미하다. 너희도 곧 이 영원한 평화를 찾을 것이다.",
						"english": "Resistance is futile. You too shall soon find this eternal peace.",
						"japanese": "抵抗は無意味だ。お前たちもじきにこの永遠の安らぎを見出すだろう。",
						"chinese": "反抗毫无意义。你们也很快会找到这永恒的平静。",
						"french": "Toute résistance est futile. Vous aussi, vous trouverez bientôt cette paix éternelle.",
						"spanish": "La resistencia es inútil. Vosotros también encontraréis pronto esta paz eterna.",
						"vietnamese": "Chống cự là vô ích. Các ngươi rồi cũng sẽ tìm thấy sự bình yên vĩnh cửu này.",
						"thai": "การต่อต้านนั้นไร้ความหมาย. พวกเจ้าเองก็จะพบกับสันติสุขนิรันดร์นี้ในไม่ช้า.",
						"hindi": "विरोध व्यर्थ है। तुम भी जल्द ही यह शाश्वत शांति पाओगे।"
					},
					"speaker": "random_boss",
					"type": "speech",
					"emotion": "base"
				},
				{
					"speaker": "glace",
					"action": "enter",
					"type": "direction",
					"duration_ms": 500,
					"spot": [
						1,
						2
					]
				},
				{
					"emotion": "base",
					"speaker": "glace",
					"type": "speech",
					"content": {
						"korean": "…괜찮아. 어차피 끝은 같아.",
						"english": "...It's fine. The end is the same anyway.",
						"japanese": "…大丈夫。どうせ終わりは同じだ。",
						"chinese": "…没关系。反正结局都一样。",
						"french": "...Ça va. La fin est la même de toute façon.",
						"spanish": "...Está bien. El final es el mismo de todos modos.",
						"vietnamese": "...Không sao đâu. Dù sao thì kết cục cũng vậy thôi.",
						"thai": "...ไม่เป็นไร. สุดท้ายก็เหมือนกันอยู่ดี.",
						"hindi": "...ठीक है। वैसे भी अंत तो एक ही है।"
					}
				}
			],
			"win_dialogue": [
				{
					"content": {
						"korean": "…결국, 너희도… 잊혀질 거야. 이 모든 건… 반복될 뿐.",
						"english": "...In the end, you too... will be forgotten. All this... merely repeats.",
						"japanese": "…結局、お前たちも…忘れ去られるだろう。この全ては…繰り返されるだけだ。",
						"chinese": "…最终，你们也会…被遗忘。这一切…不过是循环往复。",
						"french": "…Au final, vous aussi… serez oubliés. Tout cela… ne fait que se répéter.",
						"spanish": "…Al final, vosotros también… seréis olvidados. Todo esto… solo se repite.",
						"vietnamese": "…Rốt cuộc, các ngươi cũng… sẽ bị lãng quên. Tất cả những điều này… chỉ lặp lại mà thôi.",
						"thai": "...ในที่สุด พวกเจ้าก็จะ...ถูกลืมเลือนไป ทั้งหมดนี้...ก็แค่ซ้ำรอยเดิม",
						"hindi": "...अंततः, तुम भी... भुला दिए जाओगे। यह सब... केवल दोहराया जाएगा।"
					},
					"speaker": "random_boss",
					"type": "speech",
					"emotion": "base"
				},
				{
					"speaker": "character_any",
					"type": "speech",
					"content": {
						"korean": "…해냈어. 하지만… 글라세.",
						"english": "...We did it. But... Glace.",
						"japanese": "…やった。だが…グラッセ。",
						"chinese": "…成功了。但是…格莱斯。",
						"french": "…Nous l'avons fait. Mais… Glace.",
						"spanish": "…Lo logramos. Pero… Glace.",
						"vietnamese": "…Chúng ta đã làm được. Nhưng… Glace.",
						"thai": "...เราทำได้แล้ว แต่ว่า...แกลส",
						"hindi": "...हमने कर लिया। लेकिन... ग्लेस।"
					},
					"emotion": "sad"
				},
				{
					"spot": [
						1,
						2
					],
					"duration_ms": 500,
					"speaker": "glace",
					"action": "enter",
					"type": "direction"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "…아무것도 변한 건 없어. 이 고요함이 진실이야.",
						"english": "...Nothing has changed. This stillness is the truth.",
						"japanese": "…何も変わっていない。この静寂こそが真実だ。",
						"chinese": "…什么都没有改变。这份寂静才是真相。",
						"french": "…Rien n'a changé. Ce silence est la vérité.",
						"spanish": "…Nada ha cambiado. Esta quietud es la verdad.",
						"vietnamese": "…Không có gì thay đổi cả. Sự tĩnh lặng này mới là sự thật.",
						"thai": "...ไม่มีอะไรเปลี่ยนแปลง ความสงบนี้คือความจริง",
						"hindi": "...कुछ नहीं बदला। यह शांति ही सच है।"
					},
					"speaker": "glace",
					"type": "speech"
				},
				{
					"action": "exit",
					"type": "direction",
					"speaker": "glace",
					"duration_ms": 400,
					"direction": "down"
				},
				{
					"emotion": "base",
					"content": {
						"korean": "글라세는 얼어붙은 강을 따라 멀어져 갔다. 그녀의 노래가 맴돌았다.",
						"english": "Glace drifted away along the frozen river. Her song lingered.",
						"japanese": "グラッセは凍てついた川に沿って遠ざかっていった。彼女の歌が響き渡った。",
						"chinese": "格莱斯沿着冰封的河流渐行渐远。她的歌声萦绕不去。",
						"french": "Glace s'éloigna le long de la rivière gelée. Son chant résonnait encore.",
						"spanish": "Glace se alejó por el río helado. Su canción perduró.",
						"vietnamese": "Glace trôi đi dọc theo dòng sông đóng băng. Tiếng hát của nàng vẫn còn vương vấn.",
						"thai": "แกลสลอยออกไปตามแม่น้ำที่กลายเป็นน้ำแข็ง บทเพลงของเธอยังคงก้องกังวาน",
						"hindi": "ग्लेस जमी हुई नदी के किनारे बह गई। उसका गीत गूंजता रहा।"
					},
					"speaker": "narrator",
					"type": "speech"
				},
				{
					"speaker": "narrator",
					"type": "speech",
					"content": {
						"korean": "승리는 허무했다. 끝은 보이지 않았다.",
						"english": "The victory was hollow. The end was nowhere in sight.",
						"japanese": "勝利は虚しかった。終わりは見えなかった。",
						"chinese": "胜利是空虚的。结局遥遥无期。",
						"french": "La victoire était vaine. La fin n'était pas en vue.",
						"spanish": "La victoria fue vana. El final no se vislumbraba.",
						"vietnamese": "Chiến thắng thật vô nghĩa. Cái kết vẫn không thấy đâu.",
						"thai": "ชัยชนะว่างเปล่า จุดจบยังไม่เห็น",
						"hindi": "जीत खोखली थी। अंत कहीं नज़र नहीं आया।"
					},
					"emotion": "base"
				}
			],
			"id": 15
		}
	],
	"prologue": {
		"korean": [
			"텅 빈 설원, 끝없는 강.",
			"오래된 노래가 바람을 타고 흘렀다.",
			"그 달콤한 속삭임에, 한 영혼이 순응했다.",
			"이제 평화는, 가장 잔혹한 거짓이 되었다."
		],
		"english": [
			"Empty snowfield, endless river.",
			"An old song drifted on the wind.",
			"To that sweet whisper, a soul succumbed.",
			"Now peace became the cruelest lie."
		],
		"japanese": [
			"空っぽの雪原、果てしない川。",
			"古い歌が風に乗って流れた。",
			"その甘いささやきに、ある魂が従った。",
			"今や平和は、最も残酷な嘘となった。"
		],
		"chinese": [
			"空旷的雪原，无尽的河流。",
			"一首古老的歌谣随风飘荡。",
			"在那甜美的低语中，一个灵魂屈服了。",
			"现在，和平成为了最残酷的谎言。"
		],
		"french": [
			"Plaine enneigée vide, rivière sans fin.",
			"Une vieille chanson flottait dans le vent.",
			"À ce doux murmure, une âme a succombé.",
			"Désormais, la paix était le mensonge le plus cruel."
		],
		"spanish": [
			"Nevado vacío, río sin fin.",
			"Una vieja canción flotaba en el viento.",
			"A ese dulce susurro, un alma sucumbió.",
			"Ahora la paz se convirtió en la mentira más cruel."
		],
		"vietnamese": [
			"Cánh đồng tuyết hoang vắng, dòng sông bất tận.",
			"Một bài hát cũ trôi theo gió.",
			"Trước lời thì thầm ngọt ngào ấy, một linh hồn đã khuất phục.",
			"Giờ đây, hòa bình đã trở thành lời nói dối tàn nhẫn nhất."
		],
		"thai": [
			"ทุ่งหิมะว่างเปล่า, แม่น้ำที่ไม่มีที่สิ้นสุด",
			"เพลงเก่าๆ ลอยมาตามลม",
			"ด้วยเสียงกระซิบอันหอมหวานนั้น จิตวิญญาณหนึ่งได้ยอมจำนน",
			"บัดนี้ สันติภาพกลับกลายเป็นคำโกหกที่โหดร้ายที่สุด"
		],
		"hindi": [
			"खाली बर्फीला मैदान, अंतहीन नदी।",
			"एक पुराना गीत हवा में बह गया।",
			"उस मधुर फुसफुसाहट पर, एक आत्मा झुक गई।",
			"अब शांति सबसे क्रूर झूठ बन गई।"
		]
	}
} as const;
