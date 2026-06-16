export const scenario_snowy_skalhorn_35_01 = {
	"scenario_id": "snowy_skalhorn_35_01",
	"order": 1,
	"act": "intro",
	"theme": "snowy",
	"actors": {
		"eira": {
			"id": "mon_0c37c014-b5ca-4f2f-ad03-5d393e5b2eb1",
			"name": {
				"korean": "에이라",
				"english": "Eira",
				"japanese": "エイラ",
				"chinese": "艾拉",
				"french": "Eira",
				"spanish": "Eira",
				"vietnamese": "Eira",
				"thai": "ไอรา",
				"hindi": "ऐरा"
			},
			"description": "",
			"face_image_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/8e2970b7-bcb1-4b1c-6bf0-93106b373500/public",
			"battle_sprite_url": "https://imagedelivery.net/WTEqQNGFb-l-IHS6IGnzUQ/0ca1ec09-a624-450f-054a-b98de58bdb00/public"
		}
	},
	"boss": {
		"pool_id": "random_boss"
	},
	"prologue": {
		"korean": [
			"뿔잔의 표면이, 수정처럼 투명해졌다.",
			"그 깊은 곳, 무언가가 일렁였다.",
			"얼음에 갇힌 듯, 일그러진 얼굴들.",
			"그리고, 침묵 속에서 노래가 울렸다."
		],
		"english": [
			"The surface of the horn cup became crystal clear.",
			"Deep within, something shimmered.",
			"Distorted faces, as if trapped in ice.",
			"And then, a song echoed in the silence."
		],
		"japanese": [
			"角杯の表面が、水晶のように透明になった。",
			"その奥深くで、何かが揺らめいた。",
			"氷に閉じ込められたかのような、歪んだ顔。",
			"そして、沈黙の中で歌が響いた。"
		],
		"chinese": [
			"角杯的表面变得如水晶般透明。",
			"在其深处，有什么东西在晃动。",
			"扭曲的面孔，仿佛被困在冰中。",
			"然后，歌声在寂静中回荡。"
		],
		"french": [
			"La surface de la corne est devenue limpide comme du cristal.",
			"Au plus profond, quelque chose scintilla.",
			"Des visages déformés, comme piégés dans la glace.",
			"Puis, un chant résonna dans le silence."
		],
		"spanish": [
			"La superficie del cuerno se volvió transparente como el cristal.",
			"En sus profundidades, algo brilló.",
			"Rostros distorsionados, como atrapados en hielo.",
			"Y entonces, una canción resonó en el silencio."
		],
		"vietnamese": [
			"Bề mặt chiếc sừng trở nên trong suốt như pha lê.",
			"Sâu thẳm bên trong, một thứ gì đó lung linh.",
			"Những khuôn mặt méo mó, như bị mắc kẹt trong băng.",
			"Và rồi, một bài hát vang lên trong im lặng."
		],
		"thai": [
			"พื้นผิวของถ้วยเขาโปร่งใสราวกับคริสตัล",
			"ลึกเข้าไปข้างใน มีบางสิ่งระยิบระยับ",
			"ใบหน้าที่บิดเบี้ยว ราวกับถูกกักขังอยู่ในน้ำแข็ง",
			"และแล้ว เพลงก็ก้องกังวานในความเงียบงัน"
		],
		"hindi": [
			"हॉर्न कप की सतह क्रिस्टल की तरह पारदर्शी हो गई।",
			"उसकी गहराई में, कुछ झिलमिला रहा था।",
			"विकृत चेहरे, मानो बर्फ में फँसे हों।",
			"और फिर, खामोशी में एक गीत गूँज उठा।"
		]
	},
	"rooms": [
		{
			"id": 1,
			"dialogue": [
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "narrator",
					"content": {
						"korean": "뿔잔의 표면이 수정처럼 투명해졌다. 그 깊은 곳, 무언가 어른거린다.",
						"english": "The horn cup's surface became crystal clear. Deep within, something flickers.",
						"japanese": "角杯の表面が水晶のように透明になった。その奥深く、何かが揺らめいている。",
						"chinese": "角杯的表面变得如水晶般透明。深处，有什么东西在晃动。",
						"french": "La surface de la corne est devenue limpide comme du cristal. Au plus profond, quelque chose vacille.",
						"spanish": "La superficie del cuerno se volvió transparente como el cristal. En sus profundidades, algo parpadea.",
						"vietnamese": "Bề mặt chiếc sừng trong suốt như pha lê. Sâu bên trong, có gì đó chập chờn.",
						"thai": "พื้นผิวของถ้วยเขาโปร่งใสราวกับคริสตัล ลึกเข้าไปข้างใน มีบางสิ่งริบหรี่",
						"hindi": "हॉर्न कप की सतह क्रिस्टल की तरह पारदर्शी हो गई। उसकी गहराई में, कुछ टिमटिमा रहा है।"
					}
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "character_any",
					"content": {
						"korean": "…이게 뭐야?",
						"english": "...What is this?",
						"japanese": "…これは何だ？",
						"chinese": "……这是什么？",
						"french": "...Qu'est-ce que c'est ?",
						"spanish": "...¿Qué es esto?",
						"vietnamese": "...Cái này là gì?",
						"thai": "...นี่อะไรน่ะ?",
						"hindi": "...यह क्या है?"
					}
				},
				{
					"action": "enter",
					"speaker": "eira",
					"type": "direction",
					"duration_ms": 500,
					"spot": [
						4,
						3
					]
				},
				{
					"emotion": "base",
					"speaker": "eira",
					"content": {
						"korean": "기록하겠습니다. 표면이 투명해지고… 안에서 형상이….",
						"english": "I'll record this. The surface is transparent... and a shape inside...",
						"japanese": "記録します。表面が透明になり…中に形が…。",
						"chinese": "我将记录下来。表面变得透明……里面有形状……",
						"french": "Je vais le noter. La surface devient transparente... et une forme à l'intérieur...",
						"spanish": "Lo registraré. La superficie se está volviendo transparente... y una forma dentro...",
						"vietnamese": "Tôi sẽ ghi lại. Bề mặt trong suốt... và một hình dạng bên trong...",
						"thai": "ผมจะบันทึกไว้ พื้นผิวโปร่งใส... และมีรูปร่างอยู่ข้างใน...",
						"hindi": "मैं इसे रिकॉर्ड करूँगा। सतह पारदर्शी हो रही है... और अंदर एक आकृति है..."
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "sad",
					"speaker": "eira",
					"content": {
						"korean": "얼굴 같군요. 일그러진… 표정으로.",
						"english": "It looks like a face. Distorted... with an expression.",
						"japanese": "顔のようです。歪んだ…表情で。",
						"chinese": "看起来像一张脸。扭曲的……带着表情。",
						"french": "On dirait un visage. Déformé... avec une expression.",
						"spanish": "Parece una cara. Distorsionada... con una expresión.",
						"vietnamese": "Trông như một khuôn mặt. Biến dạng... với một biểu cảm.",
						"thai": "ดูเหมือนใบหน้า บิดเบี้ยว... ด้วยสีหน้า",
						"hindi": "यह एक चेहरे जैसा दिखता है। विकृत... एक भाव के साथ।"
					}
				}
			]
		},
		{
			"id": 3,
			"dialogue": [
				{
					"spot": [
						2,
						3
					],
					"duration_ms": 500,
					"type": "direction",
					"speaker": "eira",
					"action": "enter"
				},
				{
					"speaker": "character_any",
					"content": {
						"korean": "얼굴이라고? 설마 사람이….",
						"english": "A face? You don't mean a person...",
						"japanese": "顔だと？まさか人が…。",
						"chinese": "脸？难道是人……",
						"french": "Un visage ? Vous ne voulez pas dire une personne...",
						"spanish": "¿Una cara? No querrás decir una persona...",
						"vietnamese": "Một khuôn mặt? Không lẽ là người...",
						"thai": "ใบหน้าเหรอ? คุณคงไม่ได้หมายถึงคน...",
						"hindi": "एक चेहरा? तुम इंसान की बात तो नहीं कर रहे..."
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"speaker": "eira",
					"content": {
						"korean": "해독해야 합니다. 이들이 누구인지, 왜 갇혀 있는지.",
						"english": "We must decipher it. Who they are, why they're trapped.",
						"japanese": "解読しなければなりません。彼らが誰なのか、なぜ閉じ込められているのかを。",
						"chinese": "我们必须破译。他们是谁，为什么被困。",
						"french": "Nous devons le déchiffrer. Qui ils sont, pourquoi ils sont piégés.",
						"spanish": "Debemos descifrarlo. Quiénes son, por qué están atrapados.",
						"vietnamese": "Chúng ta phải giải mã. Họ là ai, tại sao lại bị mắc kẹt.",
						"thai": "เราต้องถอดรหัสว่าพวกเขาเป็นใคร ทำไมถึงถูกขังไว้",
						"hindi": "हमें इसे समझना होगा। वे कौन हैं, वे क्यों फँसे हुए हैं।"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "eira",
					"content": {
						"korean": "노래는 더 선명해졌습니다. 한기와 함께.",
						"english": "The song grew clearer, along with the chill.",
						"japanese": "歌はより鮮明になった。寒気とともに。",
						"chinese": "歌声愈发清晰。伴随着寒意。",
						"french": "Le chant devint plus clair, accompagné d'un frisson.",
						"spanish": "La canción se hizo más nítida, junto con el escalofrío.",
						"vietnamese": "Tiếng hát trở nên rõ hơn, cùng với sự lạnh lẽo.",
						"thai": "เสียงเพลงชัดเจนขึ้นพร้อมกับความหนาวเย็น",
						"hindi": "गीत और स्पष्ट हो गया, ठंडक के साथ।"
					}
				}
			]
		},
		{
			"id": 5,
			"dialogue": [
				{
					"action": "enter",
					"speaker": "eira",
					"spot": [
						3,
						2
					],
					"duration_ms": 500,
					"type": "direction"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "기록으로 밝혀질까?",
						"english": "Will it be revealed by records?",
						"japanese": "記録によって明らかになるのか？",
						"chinese": "会被记录揭示吗？",
						"french": "Sera-t-il révélé par les archives ?",
						"spanish": "¿Se revelará a través de los registros?",
						"vietnamese": "Liệu nó có được tiết lộ qua các ghi chép?",
						"thai": "จะถูกเปิดเผยด้วยบันทึกหรือไม่?",
						"hindi": "क्या यह अभिलेखों से उजागर होगा?"
					},
					"emotion": "base"
				},
				{
					"speaker": "eira",
					"content": {
						"korean": "모든 잊힌 것은, 이름을 되찾아야 합니다.",
						"english": "All that is forgotten must reclaim its name.",
						"japanese": "すべての忘れられたものは、その名を取り戻さねばならない。",
						"chinese": "所有被遗忘之物，都应重拾其名。",
						"french": "Tout ce qui est oublié doit retrouver son nom.",
						"spanish": "Todo lo olvidado debe recuperar su nombre.",
						"vietnamese": "Mọi thứ bị lãng quên đều phải tìm lại tên của mình.",
						"thai": "ทุกสิ่งที่ถูกลืมเลือนไปจะต้องทวงคืนชื่อของมัน",
						"hindi": "हर भूली हुई चीज़ को अपना नाम वापस पाना होगा।"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"emotion": "base",
					"speaker": "eira",
					"content": {
						"korean": "이 표면은, 진실의 기록이니까.",
						"english": "For this surface is a record of truth.",
						"japanese": "この表面こそ、真実の記録なのだから。",
						"chinese": "因为这表面，是真相的记录。",
						"french": "Car cette surface est un enregistrement de la vérité.",
						"spanish": "Porque esta superficie es un registro de la verdad.",
						"vietnamese": "Bởi vì bề mặt này là ghi chép của sự thật.",
						"thai": "เพราะพื้นผิวนี้คือบันทึกของความจริง",
						"hindi": "क्योंकि यह सतह, सत्य का अभिलेख है।"
					},
					"type": "speech"
				}
			]
		},
		{
			"id": 9,
			"dialogue": [
				{
					"speaker": "eira",
					"spot": [
						4,
						2
					],
					"duration_ms": 500,
					"type": "direction",
					"action": "enter"
				},
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "뿔잔 속 얼굴들은 더욱 또렷해졌다. 무언가 속삭이는 듯.",
						"english": "The faces in the horn cup grew clearer, as if whispering something.",
						"japanese": "角杯の中の顔はさらに鮮明になり、何かを囁いているようだ。",
						"chinese": "角杯中的面孔愈发清晰。仿佛在低语着什么。",
						"french": "Les visages dans la corne devinrent plus nets, comme s'ils chuchotaient quelque chose.",
						"spanish": "Los rostros en el cuerno se hicieron más claros, como si susurraran algo.",
						"vietnamese": "Những khuôn mặt trong chiếc cốc sừng trở nên rõ nét hơn, như thể đang thì thầm điều gì đó.",
						"thai": "ใบหน้าในถ้วยเขาสัตว์ชัดเจนขึ้น ราวกับกำลังกระซิบอะไรบางอย่าง",
						"hindi": "सींग के प्याले में चेहरे और स्पष्ट हो गए, जैसे कुछ फुसफुसा रहे हों।"
					},
					"emotion": "base"
				},
				{
					"emotion": "sad",
					"speaker": "character_any",
					"content": {
						"korean": "점점 더… 많아지는 것 같아.",
						"english": "It seems there are more and more...",
						"japanese": "だんだん…増えているようだ。",
						"chinese": "似乎越来越…多。",
						"french": "Il semble qu'il y en ait de plus en plus…",
						"spanish": "Parece que son cada vez más…",
						"vietnamese": "Dường như ngày càng… nhiều hơn.",
						"thai": "ดูเหมือนจะ...มากขึ้นเรื่อยๆ",
						"hindi": "ऐसा लगता है कि यह बढ़ता जा रहा है…"
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "eira",
					"content": {
						"korean": "더 많은 기억들이, 표면으로 떠오르는군요.",
						"english": "More memories are rising to the surface.",
						"japanese": "より多くの記憶が、表面に浮かび上がってくる。",
						"chinese": "更多记忆，正在浮出水面。",
						"french": "De plus en plus de souvenirs remontent à la surface.",
						"spanish": "Más recuerdos están saliendo a la superficie.",
						"vietnamese": "Nhiều ký ức hơn đang nổi lên bề mặt.",
						"thai": "ความทรงจำมากมายกำลังผุดขึ้นมาบนพื้นผิว",
						"hindi": "और अधिक यादें सतह पर उभर रही हैं।"
					}
				},
				{
					"type": "speech",
					"emotion": "base",
					"speaker": "eira",
					"content": {
						"korean": "이제 되돌릴 수 없습니다. 진실은 깊숙이 감춰져 있으니.",
						"english": "There's no turning back now. The truth lies hidden deep within.",
						"japanese": "もう引き返せない。真実は深く隠されているのだから。",
						"chinese": "已无法回头。真相深藏其中。",
						"french": "Il n'y a plus de retour en arrière possible. La vérité est profondément cachée.",
						"spanish": "Ya no hay vuelta atrás. La verdad yace profundamente oculta.",
						"vietnamese": "Không thể quay lại được nữa. Sự thật ẩn sâu bên trong.",
						"thai": "ไม่มีทางย้อนกลับได้อีกแล้ว ความจริงซ่อนเร้นอยู่ลึกสุด",
						"hindi": "अब कोई वापसी नहीं। सच्चाई गहराई में छिपी हुई है।"
					}
				}
			]
		},
		{
			"win_dialogue": [
				{
					"speaker": "random_boss",
					"content": {
						"korean": "…겨우 이 정도인가. 진짜 얼굴은… 아직 보지 못했다.",
						"english": "...Is this all? You haven't seen my true face yet.",
						"japanese": "…これだけか。真の顔は…まだ見ていない。",
						"chinese": "…就这点本事吗。真正的面目…尚未显现。",
						"french": "...C'est tout ce que tu as ? Tu n'as pas encore vu mon vrai visage.",
						"spanish": "…¿Es todo? Aún no has visto mi verdadera cara.",
						"vietnamese": "...Chỉ có thế thôi sao. Ngươi còn chưa thấy được bộ mặt thật.",
						"thai": "...แค่นี้เองรึ. หน้าจริง... ยังไม่ได้เห็นเลย.",
						"hindi": "...बस इतना ही? असली चेहरा... अभी तक देखा नहीं है।"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "character_any",
					"content": {
						"korean": "무슨 소리야? 다 끝났어.",
						"english": "What are you talking about? It's over.",
						"japanese": "何を言っている？もう終わった。",
						"chinese": "你说什么？都结束了。",
						"french": "De quoi tu parles ? C'est fini.",
						"spanish": "¿De qué hablas? Todo ha terminado.",
						"vietnamese": "Ngươi nói gì vậy? Mọi chuyện đã kết thúc rồi.",
						"thai": "พูดอะไร? มันจบแล้ว.",
						"hindi": "क्या बक रहे हो? सब खत्म हो गया।"
					},
					"emotion": "base"
				},
				{
					"emotion": "base",
					"speaker": "narrator",
					"content": {
						"korean": "쓰러진 그림자 너머, 뿔잔은 여전히 투명하게 빛났다.",
						"english": "Beyond the fallen shadow, the horn cup still glowed transparently.",
						"japanese": "倒れた影の向こう、角杯は依然として透明に輝いていた。",
						"chinese": "倒下的阴影之外，角杯依然透明地闪耀着。",
						"french": "Au-delà de l'ombre tombée, le calice en corne brillait toujours de façon transparente.",
						"spanish": "Más allá de la sombra caída, el cuerno seguía brillando transparentemente.",
						"vietnamese": "Vượt qua bóng tối ngã xuống, chiếc sừng vẫn lấp lánh trong suốt.",
						"thai": "พ้นเงาที่ร่วงหล่น, จอกเขาฉายแสงโปร่งใสไม่เปลี่ยนแปลง.",
						"hindi": "गिरी हुई छाया के पार, सींग का प्याला अब भी पारदर्शी रूप से चमक रहा था।"
					},
					"type": "speech"
				},
				{
					"emotion": "base",
					"speaker": "narrator",
					"content": {
						"korean": "그러나, 그 깊이에서 새로운 응시가 느껴진다.",
						"english": "However, a new gaze is felt from its depths.",
						"japanese": "しかし、その深奥から新たな視線が感じられる。",
						"chinese": "然而，从其深处感受到一股新的凝视。",
						"french": "Cependant, un nouveau regard est perçu de ses profondeurs.",
						"spanish": "Sin embargo, una nueva mirada se siente desde sus profundidades.",
						"vietnamese": "Tuy nhiên, từ sâu thẳm của nó, một ánh nhìn mới đang được cảm nhận.",
						"thai": "ทว่า, จากส่วนลึกของมัน, สัมผัสได้ถึงการจ้องมองใหม่.",
						"hindi": "हालांकि, उसकी गहराई से एक नई नज़र महसूस होती है।"
					},
					"type": "speech"
				},
				{
					"emotion": "base",
					"speaker": "narrator",
					"content": {
						"korean": "이제는… 들여다볼 시간이다.",
						"english": "Now... it's time to look deeper.",
						"japanese": "今は…覗き込む時だ。",
						"chinese": "现在…是时候深入探究了。",
						"french": "Maintenant... il est temps de regarder à l'intérieur.",
						"spanish": "Ahora… es hora de mirar más allá.",
						"vietnamese": "Bây giờ... là lúc để nhìn sâu hơn.",
						"thai": "บัดนี้... ถึงเวลาที่จะมองเข้าไป.",
						"hindi": "अब... गहराई से देखने का समय है।"
					},
					"type": "speech"
				}
			],
			"id": 15,
			"dialogue": [
				{
					"speaker": "narrator",
					"content": {
						"korean": "얼어붙은 방. 거대한 그림자가 앞을 막아섰다.",
						"english": "A frozen room. A massive shadow blocked the way.",
						"japanese": "凍てついた部屋。巨大な影が道を塞いだ。",
						"chinese": "冰冷的房间。巨大的身影挡住了去路。",
						"french": "Une pièce gelée. Une ombre immense barrait le passage.",
						"spanish": "Una habitación congelada. Una sombra gigantesca bloqueaba el paso.",
						"vietnamese": "Một căn phòng đóng băng. Một bóng đen khổng lồ chặn đường.",
						"thai": "ห้องที่เยือกแข็ง เงาขนาดใหญ่ขวางทางไว้",
						"hindi": "एक जमा हुआ कमरा। एक विशाल छाया ने रास्ता रोक लिया।"
					},
					"emotion": "base",
					"type": "speech"
				},
				{
					"emotion": "angry",
					"speaker": "random_boss",
					"content": {
						"korean": "하찮은 것들. 감히, 이곳까지.",
						"english": "Insignificant beings. To dare, come this far.",
						"japanese": "愚かな者ども。よくも、ここまで来たな。",
						"chinese": "微不足道的存在。竟敢，来到这里。",
						"french": "Insignifiants. Oser, venir jusqu'ici.",
						"spanish": "Seres insignificantes. Atreverse a llegar hasta aquí.",
						"vietnamese": "Những kẻ tầm thường. Dám, đến tận đây.",
						"thai": "พวกไร้ค่า บังอาจมาถึงที่นี่ได้ยังไง",
						"hindi": "तुच्छ प्राणी। इतनी दूर तक आने की हिम्मत की।"
					},
					"type": "speech"
				},
				{
					"emotion": "angry",
					"speaker": "character_any",
					"content": {
						"korean": "비켜! 진실을 알아야 해.",
						"english": "Out of my way! I need the truth.",
						"japanese": "どけ！真実を知る。",
						"chinese": "让开！我必须知道真相。",
						"french": "Poussez-vous ! Je dois savoir la vérité.",
						"spanish": "¡Quítate! Debo saber la verdad.",
						"vietnamese": "Tránh ra! Ta phải biết sự thật.",
						"thai": "หลีกไป! ข้าต้องรู้ความจริง.",
						"hindi": "हट जाओ! मुझे सच जानना है।"
					},
					"type": "speech"
				},
				{
					"type": "speech",
					"speaker": "random_boss",
					"content": {
						"korean": "진실? 너희가 감당할 수 없을 것이다.",
						"english": "Truth? You cannot handle it.",
						"japanese": "真実？お前たちには耐えられぬ。",
						"chinese": "真相？你们承受不住的。",
						"french": "La vérité ? Vous ne pourrez pas la supporter.",
						"spanish": "¿La verdad? No podréis soportarla.",
						"vietnamese": "Sự thật ư? Ngươi sẽ không chịu đựng nổi đâu.",
						"thai": "ความจริงรึ? พวกเจ้าไม่อาจรับไหวหรอก.",
						"hindi": "सच? तुम इसे संभाल नहीं पाओगे।"
					},
					"emotion": "base"
				},
				{
					"type": "speech",
					"emotion": "angry",
					"speaker": "random_boss",
					"content": {
						"korean": "여기서… 영원히 얼어붙어라.",
						"english": "Here... freeze forever.",
						"japanese": "ここで…永遠に凍てつけ。",
						"chinese": "在此…永远冰封吧。",
						"french": "Ici... gèle à jamais.",
						"spanish": "Aquí… congelaos para siempre.",
						"vietnamese": "Ở đây... đóng băng vĩnh viễn đi.",
						"thai": "ที่นี่... จงแข็งตายไปชั่วนิรันดร์.",
						"hindi": "यहाँ... हमेशा के लिए जम जाओ।"
					}
				}
			],
			"lose_dialogue": [
				{
					"type": "speech",
					"speaker": "narrator",
					"content": {
						"korean": "뿔잔 속 한기가 모든 것을 덮쳤다.",
						"english": "The chill from the horn cup enveloped everything.",
						"japanese": "角杯の冷気がすべてを覆った。",
						"chinese": "角杯中的寒气笼罩了一切。",
						"french": "Le froid du calice en corne a tout enveloppé.",
						"spanish": "El frío del cuerno lo cubrió todo.",
						"vietnamese": "Hơi lạnh từ chiếc sừng bao trùm mọi thứ.",
						"thai": "ไอเย็นจากจอกเขาปกคลุมทุกสิ่ง.",
						"hindi": "सींग के प्याले की ठंडक ने सब कुछ ढक लिया।"
					},
					"emotion": "base"
				},
				{
					"speaker": "random_boss",
					"content": {
						"korean": "이것이 너희의 끝이다. 영원히 갇혀라.",
						"english": "This is your end. Be trapped forever.",
						"japanese": "これが貴様らの終わりだ。永遠に囚われろ。",
						"chinese": "这就是你们的终结。永远被困吧。",
						"french": "C'est votre fin. Soyez piégés pour toujours.",
						"spanish": "Este es vuestro fin. Quedad atrapados para siempre.",
						"vietnamese": "Đây là kết cục của các ngươi. Bị giam cầm mãi mãi đi.",
						"thai": "นี่คือจุดจบของพวกเจ้า. จงถูกจองจำชั่วนิรันดร์.",
						"hindi": "यह तुम्हारा अंत है। हमेशा के लिए कैद हो जाओ।"
					},
					"emotion": "angry",
					"type": "speech"
				},
				{
					"type": "speech",
					"emotion": "angry",
					"speaker": "character_any",
					"content": {
						"korean": "…아직, 포기할 수 없어.",
						"english": "Not yet... I can't give up.",
						"japanese": "…まだ、諦められない。",
						"chinese": "…我还没法放弃。",
						"french": "...Je ne peux pas encore abandonner.",
						"spanish": "...Todavía no puedo rendirme.",
						"vietnamese": "...Vẫn chưa thể bỏ cuộc.",
						"thai": "...ยังยอมแพ้ไม่ได้.",
						"hindi": "...अभी हार नहीं मान सकता।"
					}
				}
			]
		}
	]
} as const;
